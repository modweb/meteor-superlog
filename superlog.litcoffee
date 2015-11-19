Prepend all logs with timestamp

    Superlog = ->
      args = Array.prototype.slice.call arguments
      console.log [moment().format()].concat(args).join(' ')
