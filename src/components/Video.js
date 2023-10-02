import './Video.css';

function Video({title, channel, views, time}) {

  
 // let bg = 'dark';
  return (
    <>
    <div className='container'>
      <div className='pic'>
         <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" width="100px" height="100px"/>
      </div>

      <div className="title"> {title} </div>
      <div className='channel'> {channel}</div>
      <div className='views'>
        {views} views <span>.</span> {time}
      </div>
    </div> 
    </>
  );
}


export default Video;
