import React, { Suspense } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

async function MealsData(){
  const meals = await getMeals();
 return <MealsGrid  meals = {meals} />
}

const Meals = () => {
  
  return (
    <>
    <header className = {styles.header}>
      <h1>
           Delicious meals, created{' '}
           <span className = {styles.highlight}>by you</span>
      </h1>
      <p>Choose your favorite recipe and cook it yourself. It is easy and fun</p>
      <p className = {styles.cta}>
        <Link href = "/meals/share">
          Share Your favorite meal
        </Link>
      </p>
    </header>
    <main className={styles.main}>
      <Suspense fallback = {<p className = {styles.loading}>Loading...</p>}>
        <MealsData />
      </Suspense>
    </main>
    </>
    
  )
}

export default Meals
