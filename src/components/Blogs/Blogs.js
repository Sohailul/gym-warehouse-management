import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5 mb-5'>Blogs</h2>
            <div className='row gy-5'>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src="https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className='card-title'>Difference between javascript and nodejs..</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use. JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src="https://miro.medium.com/max/720/1*ay9nx1XdZ3AOzx5Ev8xJEg.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className='card-title'>When should you use nodejs and when should you use mongodb</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too. There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. </p>
                            <p>---</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className='card-title'>Differences between sql and nosql databases</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>SQL databases are relational, NoSQL databases are non-relational.
                                SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                                SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                                SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                                SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </p>
                            <p>---</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <div className="card" style={{ width: "25rem" }}>
                        <img src="https://uploads.toptal.io/blog/image/956/toptal-blog-image-1426676395222.jpeg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className='card-title'>What is the purpose of jwt and how does it work</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;