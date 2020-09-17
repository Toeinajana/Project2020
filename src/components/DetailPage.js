import React, { Component } from 'react'
import "./DetailPage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'






export class DetailPage extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <h1 className="optically">Optically</h1>

                    <div className="language">

                    <p className="sub-language">Language</p>
                    <img className="flag" src="https://www.flaticon.com/svg/static/icons/svg/197/197452.svg"></img>
                    <p className="sub-language-thai">ภาษาไทย</p>
                    <img className="flag" src="https://www.flaticon.com/svg/static/icons/svg/197/197374.svg"></img>
                    <p className="sub-language">English</p>
                    <button className="loginbtn">Login</button>


                    </div>

                </div>

                <div className="navbar2">

                    <div className="menu">
                    <p className="sub-menu">system</p>
                    <p className="active">glasses</p>
                    <p className="sub-menu">sunglasses</p>
                    <p className="sub-menu">brand</p>
                    <p className="sub-menu">shop</p>

                    </div>

                </div>

                <div className="breadcrumb">
                    <FontAwesomeIcon className="sub-breadcrumb-icon" icon={faHome} />   
                    <p className="sub-breadcrumb">Home</p>
                    <FontAwesomeIcon className="sub-breadcrumb-icon2" icon={faAngleDoubleRight} />   
                    <p className="sub-breadcrumb">glasses</p>

                </div>

                <div className="search">
                    <input className="input" placeholder="P / No."></input>
                    <FontAwesomeIcon className="iconDown" icon={faSearch} />
                    <input className="input" placeholder="PRICE"></input>
                    <FontAwesomeIcon className="iconDown" icon={faChevronCircleDown} />
                    <input className="input" placeholder="BRAND : ALL"></input>
                    <FontAwesomeIcon className="iconDown" icon={faChevronCircleDown} />

                </div>

                <div className="sortby">
                    <input className="sub-sortby" placeholder="Sort By :"></input>
                    <FontAwesomeIcon className="iconDownSortby" icon={faChevronCircleDown} />

                </div>

                <div className="pagination">
                    <span className="pageNumber">1</span>
                    <span className="pageNumber">2</span>
                    <span className="pageNumber">3</span>
                    <FontAwesomeIcon className="iconRight" icon={faChevronCircleRight} />

                </div>

                <div className="productSection">
                <div>
                <img className="proImg" src="https://www.owndays.com/img/upload/product/kADWKJxWUFYsdxwn3q91Y9jvUwh8cn4B.jpg"></img>
                <h4 className="proCode">TJ00-0001</h4>
                {/* <div>
                <img className="baht" src="https://www.flaticon.com/svg/static/icons/svg/507/507227.svg"></img>
                <h4 className="proCode">2,099</h4>
                </div> */}
                <h4 className="proCode">THB2,099</h4>

                </div>
                
                <div>
                <img className="proImg" src="https://www.owndays.com/img/upload/product/feASL26thdFZuM9PUJUP7AGLD3x1UdQe.jpg"></img>
                <h4 className="proCode">TJ00-0002</h4>
                <h4 className="proCode">THB2,099</h4>
                </div>

                <div>
                <img className="proImg" src="https://www.owndays.com/img/upload/product/wZJte9VNVuSDwet4TBTkBNjTcF1ZwaRS.jpg"></img>
                <h4 className="proCode">TJ00-0003</h4>
                <h4 className="proCode">THB2,099</h4>
                </div>


                </div>


                <div className="productSection2">
                <div>
                <img className="proImg" src="https://www.owndays.com/img/upload/product/SS8ZPU85wc5j64W9Xa5WdhtCafaUk886.jpg"></img>
                <h4 className="proCode">TJ00-0004</h4>
                <h4 className="proCode">THB2,099</h4>
                </div>
                
                <div>
                <img className="proImg" src="https://www.owndays.com/img/upload/product/ZGC1jQ6FsPfWkvc2kFX8C8zHbbc2YRDa.jpg"></img>
                <h4 className="proCode">TJ00-0005</h4>
                <h4 className="proCode">THB2,099</h4>
                </div>

                <div>
                <img className="proImg" src="https://www.owndays.com/img/upload/product/YpmRr008tpNNM1Gz5YV1gYq4G1K1PkgJ.jpg"></img>
                <h4 className="proCode">TJ00-0006</h4>
                <h4 className="proCode">THB2,099</h4>
                </div>


                </div>

            </div>
        )
    }
}

export default DetailPage
