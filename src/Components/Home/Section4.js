import React from "react";

const Section4 = () => {
  return (
    <div className="my-10">
      <div className="mx-auto">
        <div className="card shadow-md bg-primary text-primary w-4/5 mx-auto lg:w-full m-0 p-0">
          <div className="card-body">
            <div className="flex flex-col w-full lg:flex-row">
              <div className="grid flex-grow h-max card bg-base-300 rounded-box place-items-center p-0 lg:p-10 justify-center">
                <p className="text-md lg:text-2xl font-semibold my-2">
                  Contact information
                </p>
                <p className="text-sm lg:text-xl font-light my-2 text-slate-700">
                  See the location and mail in the given address.
                  <br />
                  We will contact with you within 24 hours.
                </p>
                <p className="text-sm lg:text-xl font-light my-2">
                  Phone: +8801874628178
                </p>
                <p className="text-sm lg:text-xl font-light my-2">
                  Email: mbmsourov@gmail.com
                </p>
                <p className="text-sm lg:text-xl font-light my-2">
                  Location: ঢাকা 1207
                </p>
              </div>
              <div className="divider lg:divider-horizontal">OR</div>
              <div className="grid flex-grow h-80 w-80 card bg-base-300 place-items-center rounded-lg">
                <iframe
                  title="sd"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.30733188728!2d90.3616720522753!3d23.762465079847843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8abd1986c19%3A0x14e06df6918d8844!2z4Kac4Ka-4Kak4KeA4Kav4Ka8IOCmuOCmguCmuOCmpiDgpq3gpqzgpqg!5e0!3m2!1sbn!2sbd!4v1668075173550!5m2!1sbn!2sbd"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
