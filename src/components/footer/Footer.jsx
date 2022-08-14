/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../shared/Logo';
// import { showContactUs, hideContactUs } from '../../redux/action/ui.action';
import blogs from '../../data/blogs.json';
import FooterBlog from './FooterBlog';
import { Button } from '../shared/Buttons';
import data from '../../data/index.json';
import SIcon from '../shared/SIcon2';

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="d-flex">
                <div className="logo d-flex justify-content-center align-items-center" href="#">
                  <Logo with={40} height={40} />
                  <h6>DOTPHARMA</h6>
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni molestias natus rem ex, molestiae a iste ipsum similique tempore, libero possimus ad facilis omnis? Similique est optio distinctio omnis molestias.</p>
              <div className="social-m d-flex py-3">
                {data?.general?.socialMedia.map((item, i) => (
                  <SIcon
                    key={`key_${i}`}
                    icon={item.icon}
                    styleClass="icon5"
                    title={item.name}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <h2 className="footer-heading">Latest News</h2>
              {blogs.map((b, i) => (
                <FooterBlog
                  key={`item_${i}`}
                  title={b.title}
                  date={b.date}
                  image={b.image}
                />
              ))}
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0 contact-us-f">
              <h2 className="footer-heading">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-phone" />
                      <span className="text">+250 781 049 218</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-paper-plane" />
                      <span className="text">dotpharma@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Button
                  text=" Talk To Us"
                  onClick={e => {
                    e.preventDefault();
                    this.props.showContactUs();
                  }}
                />
                {/* <a
                  href="#"
                  className="py-2 btn-1"
                  onClick={e => {
                    e.preventDefault();
                    this.props.showContactUs();
                  }}
                >
                  Talk To Us
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default connect(null, {
  // hideContactUs,
  // showContactUs,
})(Footer);
