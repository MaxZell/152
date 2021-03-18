import React, { useRef, useEffect } from 'react'
import { useCallback } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const handleClickOpen = useCallback(() => {
    draw(true)
  }, [])

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.font = "20px Roboto";
    ctx.fillText("I`m Canvas", 100, 100);
    ctx.fill()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [handleClickOpen])
  
  return(
    <div>
        <h3>Canvas</h3>
        <canvas ref={canvasRef} {...props}/>
  </div>
  )
}

export default Canvas