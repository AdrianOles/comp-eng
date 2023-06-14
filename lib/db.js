import mysql from 'serverless-mysql';

const db = mysql({
    config: {
        host: "sql9.freesqldatabase.com",
        port: 3306,
        database: "sql9625354",
        user: "sql9625354",
        password: "ZPZwHkMTZF"
    }
});

export default async function executeQuery({ query, values }) {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        return { error };
    }
}