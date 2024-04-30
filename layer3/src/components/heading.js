  import React from 'react'

  const heading = ({collapsed, setCollapsed}) => {
    console.log(collapsed);
    return (
      <div className='head-content'>
        <i class="bi bi-cpu" style={{fontSize:"30px"}}></i>
        <h3 className={collapsed ? "collapsed" : "heading"}>Dynamic Sidebar</h3>
        <span>{collapsed ?  <i class={collapsed ? "collapsedd" : "bi bi-arrow-right"} onClick={()=>setCollapsed(false)}></i>: <i class="bi bi-arrow-left" onClick={()=>setCollapsed(true)}></i>}</span>
        
      </div>
    )
  }

  export default heading
