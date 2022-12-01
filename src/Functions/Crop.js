
export function DragStart(e,container,target,setState,state) {
    let offsetX = e.clientX - container.x - target.offsetLeft;
    let offsetY = e.clientY - container.y - target.offsetTop;


    setState({
      ...state,
      x: offsetX,
      y: offsetY
    })
    e.dataTransfer.setDragImage(new Image(), 0, 0)
  }


 export  function Drag(e,container,targetWidth,targetHeight,setState,oldState,state) {
    let offsetX = Math.min(e.clientX - container.x - state.x, container.width - targetWidth);
    offsetX = Math.max(offsetX, 0);

    let offsetY = Math.min(e.clientY - container.y - state.y, container.height - targetHeight);
    offsetY = Math.max(offsetY, 0);


    setState({
      ...oldState,
      offsetX: Math.round(offsetX),
      offsetY: Math.round(offsetY)
    })

  }