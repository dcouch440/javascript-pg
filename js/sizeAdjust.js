export const sizeAdjust = () => {
  const myButtons = [...document.querySelectorAll('button')]
  const getRoot = document.getElementById('root')

  const addEvents = (buttons = myButtons) => {
    buttons.map(button => {
      button.addEventListener('click', (event) => {
        const id = button.id
        if (id === '36px') {
          getRoot.className = 'small'
        } else if (id === '72px') {
          getRoot.className = 'medium'
        } else if (id === '144px') {
          getRoot.className = 'large'
        } else if (id === '288px') {
          getRoot.className = 'xlarge'
        }
      })
    })
  }
  addEvents()
}
