import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="flex-col">
      <div className="collapse m-10 rounded-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Difference between SQL and NoSQL
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
            <br />
            There are five practical differences between SQL and NoSQL:
            <br />
            1.Language <br />
            2.Scalability <br />
            3.Structure <br />
            4.Properties <br />
            5.Support and communities
          </p>
        </div>
      </div>
      <div className="collapse m-10 rounded-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed. JWTs can be signed using
            a secret (with the HMAC algorithm) or a public/private key pair
            using RSA or ECDSA.
            <br />
            JWTs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
            Once decoded, you will get two JSON strings: The header and the
            payload. The signature. The JOSE (JSON Object Signing and
            Encryption) header contains the type of token — JWT in this case —
            and the signing algorithm. The payload contains the claims. This is
            displayed as a JSON string, usually containing no more than a dozen
            fields to keep the JWT compact. This information is typically used
            by the server to verify that the user has permission to perform the
            action they are requesting. There are no mandatory claims for a JWT,
            but overlaying standards may make claims mandatory. For example,
            when using JWT as bearer access token under OAuth2.0, iss, sub, aud,
            and exp must be present. some are more common than others. The
            signature ensures that the token hasn’t been altered. The party that
            creates the JWT signs the header and payload with a secret that is
            known to both the issuer and receiver, or with a private key known
            only to the sender. When the token is used, the receiving party
            verifies that the header and payload match the signature.
          </p>
        </div>
      </div>
      <div className="collapse m-10 rounded-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            1. Javascript is a programming language that is used for writing
            scripts on the website || NodeJS is a Javascript runtime
            environment.
            <br />
            2. Javascript can only be run in the browsers || We can run
            Javascript outside the browser with the help of NodeJS.
            <br />
            3. It is basically used on the client-side || It is mostly used on
            the server-side.
            <br />
            4. Javascript is capable enough to add HTML and play with the DOM ||
            Nodejs does not have capability to add HTML tags.
            <br />
            5. Javascript is used in frontend development || Nodejs is used in
            server-side development.
          </p>
        </div>
      </div>
      <div className="collapse m-10 rounded-lg">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
