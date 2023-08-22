import React from 'react'

function MessageButton() {
  return (
    <div>
        <div className="flex gap-2 py-2">
          <div className="p-2 bg-dark1 rounded-md cursor-pointer hover:bg-niceblue transition-colors">
            🚀 
          </div>
          <div className="p-2 bg-dark1 rounded-md cursor-pointer hover:bg-niceyellow transition-colors">
            💩
          </div>
        </div>
    </div>
  )
}

export default MessageButton