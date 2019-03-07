const main = () => {
  let colorClass = ''
  $('.select-color').on('click', evt => {
    let selectedColor = $(evt.currentTarget).attr('class')
    // console.log(selectedColor)
    if (selectedColor === 'select-color cyan not-selected') {
      colorClass = 'cyan'
    } else if (selectedColor === 'select-color magenta not-selected') {
      colorClass = 'magenta'
    } else {
      colorClass = 'yellow'
    }
    $(evt.currentTarget).removeClass('not-selected')
    $(evt.currentTarget)
      .siblings()
      .addClass('not-selected')
  })

  $('.box').on('click', evt => {
    $(evt.currentTarget).toggleClass(colorClass)
  })

  $('.toggle-blink').on('click', evt => {
    if (colorClass) {
      $('.toggle-blink').toggleClass('opacity')
      setInterval(evt => {
        $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink'), 350
      })
    }
  })
}

$(document).ready(main)
