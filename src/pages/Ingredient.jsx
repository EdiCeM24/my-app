import ChefImg from '../Assets/chef-logo.png';

export default function Ingredient() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes", "Seylles"]

  const ingredientsList = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>
  })
  
  function onSubmit(e) {
      e.preventDefault();
      console.log("Form Submitted!");
      const formData = new FormData(e.target)
      const newIngredients = formData.get("ingredient")
      ingredients.push(newIngredients)
      console.log(ingredients)
  }
    

  return (
    <div className="p-60">
       <section className='bg-fuchsia-950 rounded-md w-full'>
       <div className='flex items-center justify-center'>
         <img src={ChefImg} alt='' className='w-20 mt-6 rounded'/>
       </div>
       <form onSubmit={onSubmit} className="gap-4 p-10 rounded- w-full">
           <input type="text" name='ingredient' placeholder="e.g. oregano" aria-label="Add ingredient" className="mb-8 p-4 rounded-md font-semibold ml-[30%] border-0 outline-0"/>

           <button className="flex text-center justify-evenly bg-blue-700 font-semibold text-yellow-200 rounded-md px-4 py-4 ml-[33%]">+ Add Ingredients</button>
       </form>
       <ul>
      <li>{ingredientsList}</li>
       </ul>
       </section>
    </div>
  )
}
