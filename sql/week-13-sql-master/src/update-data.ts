import { getClient } from "./utils";

async function updateTodo(todoId: number) {
    const client = await getClient();
    
    const updateTodoText = 'UPDATE todos SET done = $1 WHERE id = $2';
    await client.query(updateTodoText, [true, todoId]);
    
    console.log(`Todo with ID ${todoId} updated to done!`);
}

const todoIdToUpdate = 1;
updateTodo(todoIdToUpdate);


// postgresql:admin:-0mCYPvhBZP9s593NuSHSK1extnzh_@us-east-1.24137400-88da-47de-82d2-fec85d1f0990.aws.yugabyte.cloud:5433/ 
// yugabyte?ssl=true&sslmode=verify-full&sslrootcert=Cluster: lustrous-armadillo
// YSQL Username: admin
// YSQL Password: -0mCYPvhBZP9s593NuSHSK1extnzh_
// YCQL Username: admin
// YCQL Password: -0mCYPvhBZP9s593NuSHSK1extnzh_