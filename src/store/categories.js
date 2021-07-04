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
    activeCategory: null,
  }
  
  const categoryReducer = (state = initialState, action) => {
    let { type, payload } = action;
  
    switch (type) {
      case 'SETCATEGORY':
        let activeCategory = payload;
        let categories = initialState.categories;
        return { activeCategory, categories };
  
      case 'RESET':
        return initialState;
  
      default:
        return state;
    }
  }
  
  export const setActiveCategory = (category) => {
    return {
      type: 'SETCATEGORY',
      payload: category
    }
  }
  
  export const reset = () => {
    return {
      type: 'RESET'
    }
  }
  
  export default categoryReducer;