import React, { Component } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";
import ImageUploader from "react-images-upload";
export default class Adminadd extends Component {
  constructor(props) {
    super(props);
    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangecategory = this.onChangecategory.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onChangetext = this.onChangetext.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: "",
      text: "",
      category: "",
      price: "",
      photo: "",
      cate: [],
    };
  }
  xyz = [];
  onInputChange(e) {
    this.setState({
      photo: e.target.files[0],
    });
  }
  onChangetitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangetext(e) {
    this.setState({
      text: e.target.value,
    });
  }
  onChangecategory(e) {
    this.setState({
      category: e.target.value,
    });
  }
  onChangeprice(e) {
    this.setState({
      price: e.target.value,
    });
  }
  eleman = [];
  componentDidMount() {
    axios.get("http://localhost:3000/admin/addcategories").then((res) => {
      for (var i = 0; i < res.data.length; i++) {
        this.eleman.push(res.data[i].category);
      }

      console.log(this.eleman);
      this.setState({ cate: this.eleman });
      console.log(this.state.cate);
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const posts = {
      title: this.state.title,
      text: this.state.text,
      category: this.state.category,
      price: this.state.price,
      photo: this.state.photo.name,
    };
    const formData = new FormData();
    formData.append("photo", this.state.photo);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:3000/admin/upload", formData, config)
      .then((res) => console.log(res.data));

    console.log(this.state.photo);
    console.log(posts);
    alert(this.state.photo.name);
    axios
      .post("http://localhost:3000/admin/add", posts)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div class="productadd">
        <h3>Create New product Log</h3>
        <form onSubmit={this.onSubmit} enctype="multipart/form-data">
          <input
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.onChangetitle}
          />
          <input
            type="text"
            name="text"
            placeholder="text"
            value={this.state.text}
            onChange={this.onChangetext}
          />
          <div class="selectedde">
            <select
              value={this.state.category}
              onChange={this.onChangecategory}
            >
              {this.state.cate.map(function (eleman) {
                return (
                  <option class="selectto" value={eleman}>
                    {eleman}
                  </option>
                );
              })}
            </select>
          </div>

          <input
            type="text"
            name="price"
            placeholder="price"
            value={this.state.price}
            onChange={this.onChangeprice}
          />

  

          <input type="file" name="photo" onChange={this.onInputChange} />
          <input type="submit" value="submit" class="sbmt" />
        </form>
      </div>
    );
  }
}
