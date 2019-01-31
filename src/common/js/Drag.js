// < div style = {
//     { left: this.state.needX, top: this.state.needY, width: this.state.width, height: this.state.height, background: "red" } }
// className = "box"
// onMouseDown = { this.FnDown.bind(this) } > < /div>
// constructor(props){
//     super(props)
//     this.state = {
//         needX : 0,
//         needY : 0,
//         width : 100+"px",
//         height : 100+"px",
//         flag : false,
//     }
//     this.disX = 0;
//     this.disY = 0;
// }
// FnDown(e){

//     let event = e || window.event;
//     let target = event.target || event.srcElement;
//     this.disX = event.clientX - target.offsetLeft;
//     this.disY = event.clientY - target.offsetTop;
//     this.setState({
//         flag:true
//     })
//     document.onmousemove = this.FnMove.bind(this);
//     document.onmouseup = this.FnUp.bind(this);

// }
// FnMove(e){
//     let event = e || window.event;
//     let target = event.target || event.srcElement;
//     this.setState({
//         needX : event.clientX - this.disX,
//         needY : event.clientY - this.disY,
//     })
// }
// FnUp(e){
//     this.setState({
//         flag:false
//     })
//     document.onmousemove = null;
//     document.onmouseup = null;
// }