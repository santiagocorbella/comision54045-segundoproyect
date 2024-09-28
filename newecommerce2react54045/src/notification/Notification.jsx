const Notification = ({notificacionData}) => {

  const colors = {
    success: 'blue',
    error: 'red',
    warning: 'orange',
    info: 'blue'
  }
  
  const title = {
    success: 'Correcto',
    error: 'Error',
    warning: 'Advertencia',
    info: 'Informacion'
  }  
    const notificationStyle = {
      position: 'absolute',
      top: 320,
      right: 35,
      backgroundColor: colors[notificacionData.type],
      color: 'yellow',
      padding: 4,
      borderRadius: 2
    }
  
    return (
      <article style={notificationStyle}>
        <h3>{ title[notificacionData.type] }</h3>
        { notificacionData.text }
      </article>
    )
  } 

  export default Notification 