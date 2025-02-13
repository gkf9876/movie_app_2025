import React from 'react';
import withRouter from "./withRouter.js";

class Detail extends React.Component{
    componentDidMount(){
        const { location, navigate } = this.props;
        if(location.state == null){
            setTimeout(() => navigate("/"), 0);
        }
    }

    render(){
        const { location } = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }else{
            return null;
        }
    }
}

export default withRouter(Detail);