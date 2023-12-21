import neo4j from 'neo4j-driver';

exports.handler = async function(event, context) {
  const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
  );

  const session = driver.session();

  const query = `
    MATCH (n)-[r]->(m)
    RETURN collect(distinct n) as nodes, collect(distinct r) as rels
  `;

try {
    await session.run(query);
    const nodes = [];
    const links = [];

    // populate nodes and links arrays
    const result = await session.run(query);
    result.records.forEach(record => {
        const node = record.get('nodes');
        const rel = record.get('rels');
        nodes.push(node);
        links.push(rel);
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ nodes, links })
    };
} catch (error) {
    console.error('Error fetching graph data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching graph data' })
    };
  } finally {
    session.close();
  }
};