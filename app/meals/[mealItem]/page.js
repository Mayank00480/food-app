import React from 'react'
import Image from 'next/image'
import classes from './page.module.css'
import { getMeal } from '@/lib/meals'
import { notFound } from 'next/navigation'
const MealItem = async({params}) => {
  console.log(params.mealItem)
  const MealItem = await getMeal(params.mealItem)
  if(!MealItem){
    notFound();
  }
  MealItem.instructions = MealItem.instructions.replace(/\n/g,' <br/>')
  return (
   <>
   <header className={classes.header}>
   <div className = {classes.image}>
    <Image fill className= {classes.image} src = {MealItem.image}/>
   </div>
   <div className = {classes.headerText}>
    <h1>  {MealItem.title}  </h1>
    <p className = {classes.creator}>
      by <a href = {`mailto:${MealItem.creator_email}`}>{MealItem.creator}</a>
    </p>
    <p className = {classes.summary}> {MealItem.summary} </p>
   </div>
   </header>
   <main>
    <p className = {classes.instructions} dangerouslySetInnerHTML={{
      __html : MealItem.instructions,
    }}></p>
   </main>
   </>
  )
}

export default MealItem
