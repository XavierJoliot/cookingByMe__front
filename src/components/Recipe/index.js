// import utils
import './styles.scss';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

const Recipe = () => {
  const { id } = useParams();
  const currentRecipe = useSelector((state) => state.recipes.currentRecipe);
  
  // voir pour amélioration
  const handleLinkClick = (e) => {
    const currentElmt = e.target;
    if(currentElmt.innerHTML === 'Ingrédients') {
      currentElmt.classList.add('recipe__content__menu__link--active');
      document.getElementById('ingredients').classList.remove('recipe__content__ingredients--hidden');
      document.getElementById('stepButton').classList.remove('recipe__content__menu__link--active');
      document.getElementById('steps').classList.add('recipe__content__steps--hidden');
    }
    
    if (currentElmt.innerHTML === 'Étapes') {
      currentElmt.classList.add('recipe__content__menu__link--active');
      document.getElementById('steps').classList.remove('recipe__content__steps--hidden');
      document.getElementById('ingredientsButton').classList.remove('recipe__content__menu__link--active');
      document.getElementById('ingredients').classList.add('recipe__content__ingredients--hidden');
    }
    console.log(currentElmt);
  }

  return (
    <main className='recipe'>
      <section className='recipe__presentation'>
        <img className='recipe__presentation__image' src={currentRecipe.imagePath} alt='Presentation recette utilisateur Cooking by me' />
        <h1 className='recipe__presentation__title'>{currentRecipe.title}</h1>
      </section>
      <section className='recipe__description'>
        <div className='recipe__description__info'>
          <i className="fa-regular fa-clock recipe__description__info__icon"></i>
          <h2 className='recipe__description__info__title'>{currentRecipe.duration} minutes</h2>
        </div>
        <div className='recipe__description__info'>
        <i className="fa-regular fa-user recipe__description__info__icon"></i>
          <h2 className='recipe__description__info__title'>{currentRecipe.quantity} personnes</h2>
        </div>
      </section>
      <section className='recipe__content'>
        <div className='recipe__content__menu'>
          <a id='ingredientsButton' className='recipe__content__menu__link recipe__content__menu__link--active' onClick={handleLinkClick}>
            Ingrédients
          </a>
          <a id='stepButton' className='recipe__content__menu__link' onClick={handleLinkClick}>
            Étapes
          </a>
        </div>
        <article id='ingredients' className='recipe__content__ingredients'>
          <ul className='recipe__content__ingredients__list'>
            {
              currentRecipe.ingredients.map(
                (item) => (
                  <li key={item.id} className='recipe__content__ingredients__list__item'>
                    - {item.name} - {item.quantity}{item.unit}
                  </li>
                )
              )
            }
          </ul>
        </article>
        <article id='steps' className='recipe__content__steps recipe__content__steps--hidden'>
          {
            currentRecipe.steps.map(
              (item) => (
                <div key={item.id} className='recipe__content__steps__item'>
                  <h3 className='recipe__content__steps__item__title'>
                  Étape {item.order} :
                  </h3>
                  <p className='recipe__content__steps__item__text'>
                    {item.description}
                  </p>
                </div>
              )
            )
          }
        </article>
      </section>
    </main>
  );
};

export default Recipe;
