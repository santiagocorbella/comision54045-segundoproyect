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
      top: 150,
      right: 30,
      backgroundColor: colors[notificacionData.type],
      color: 'yellow',
      padding: 20,
      borderRadius: 5
    }
  
    return (
      <article style={notificationStyle}>
        <h3>{ title[notificacionData.type] }</h3>
        { notificacionData.text }
      </article>
    )
  } 

  export default Notification 