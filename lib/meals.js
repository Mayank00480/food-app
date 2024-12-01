import sql  from 'better-sqlite3'

const db = sql('meals.db');

export async function getMeals(){
 await new Promise((res , rej) => setTimeout(res , 2000))
 return db.prepare('SELECT * FROM meals ').all();
}

export async function getMeal(slug){
    await new Promise((res , rej) => setTimeout(res , 2000));
    return db.prepare('SELECT * from meals where slug = ?').get(slug);
}