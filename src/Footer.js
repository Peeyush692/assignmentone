import React, { Component } from "react";

class Footer extends Component
{
    render()
    {
        return(
            <footer className="text-muted py-5">
  <div className="container">
    <p className="float-end mb-1">
      <a href="#">Back to top - this link does take you back to the top of the page.</a>
    </p>
    <p className="mb-1">Copyright@ Peeyush Bharati (30037859)</p>
    <p className="mb-0">More Information About Devloper......... <a href="https://www.facebook.com/peeyush.bharati.3">Visit the Facebook Page</a> .</p>
  </div>
</footer>
        );
    }
}

export default Footer;