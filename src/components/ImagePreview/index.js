import { Upload, Icon, Modal } from 'antd';

export default class ImagePreview extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
   
  };




  componentDidMount() {
    

  }
  componentWillReceiveProps(){
    

  }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (event, imageLocation) => {
    console.log("preview file", imageLocation)
    this.setState({
      previewImage: imageLocation,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
   
    const {imageLocation} = this.props;
    const {previewVisible,previewImage} = this.state;
    //const {fileList} = this.state;
    
    

    return (
      <div className="clearfix">
        <img
          src={imageLocation}
          style={{height:40, width:40}}
          title={imageLocation}
          alt={imageLocation}
          onClick={(event)=>this.handlePreview(event,imageLocation)}
        >
          
        </img>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}