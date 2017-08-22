const blocks = [
  {
    theme: 'dark',
    title: 'Dark theme',
    copy: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos itaque ad minima impedit commodi voluptas consequuntur, quisquam, et dolores soluta maxime pariatur. Excepturi animi veritatis tempore delectus, neque nisi tenetur?'
  },
  {
    theme: 'none',
    title: 'No theme',
    copy: 'Accusantium nesciunt nobis fuga quis perspiciatis eaque enim aspernatur nisi perferendis, maxime eveniet ea illo unde tempore, dolorem in veniam necessitatibus repudiandae repellat ut! Corrupti ducimus ipsam quis beatae ut.'
  },
  {
    theme: 'light',
    title: 'Light theme',
    copy: 'Dolore, nihil! Itaque nemo eveniet eius vitae culpa quibusdam, vero repudiandae natus id quisquam nam recusandae maxime consectetur expedita sequi nihil, temporibus accusantium blanditiis beatae ab illo corporis. Obcaecati, incidunt?'
  },
  {
    theme: 'none',
    title: 'No theme',
    copy: 'Accusantium nesciunt nobis fuga quis perspiciatis eaque enim aspernatur nisi perferendis, maxime eveniet ea illo unde tempore, dolorem in veniam necessitatibus repudiandae repellat ut! Corrupti ducimus ipsam quis beatae ut.'
  }
]
const main = document.querySelector('main')
const makeBlock = (block) => {
  return `
    <section class="theme-${block.theme}">
      <div class="container">
        <h2>${block.title}</h2>
        <p>${block.copy}</p>
      </div>
    </section>
  `
}
blocks.forEach((block)=>{
  main.innerHTML += makeBlock(block)
})

document.querySelectorAll('nav button').forEach((button)=>{
  button.addEventListener('click', (e)=>{
    document.documentElement.className = `theme-${e.currentTarget.getAttribute('data-target')}`
  })
})