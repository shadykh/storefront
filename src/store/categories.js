let initialState = {
  categories: [
    {
      name: 'ELECTRONICS',
      displayName: 'ELECTRONICS',
      description: 'Devices that make your life easier 💻'
    },
    {
      name: 'FOOD',
      displayName: 'FOOD',
      description: 'Heeeey 💃 Yummy 😋'
    },
    {
      name: 'ANIME',
      displayName: 'ANIME',
      description: '😎Be ready for a lot of FUN👻'
    },
  ],
  activeCategory: '',
}

const categoryReducer = (state = initialState, action) => {
  let { type, payload } = action;
  let activeCategory, categories;
  switch (type) {
    case 'ACTIVATE':
      activeCategory = payload;
      categories = initialState.categories;
      return { activeCategory, categories };
    case 'All_Products':
      activeCategory = 'all';
      categories = initialState.categories;
      return { activeCategory, categories };
    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export const setActiveCategory = (category) => {
  return {
    type: 'ACTIVATE',
    payload: category
  }
}
export const allProducts = () => {
  return {
    type: 'All_Products'
  }
}
export const reset = () => {
  return {
    type: 'RESET'
  }
}

export default categoryReducer;