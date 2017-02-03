const should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var url = supertest("http://localhost:8080/restaurant");

describe("Testing the get method", function(err){
  it("should handle the request", function(done){
    url
        .get("/")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
  res.text.should.equal("Hello from Express",res.text, "response text is not matching with test string!");
          done();
        });
  });

  });

describe("Testing the view route", function(err)
{
  it("should handle the JSON object", function(done)
  {
    url
        .get("/view")
        .expect(200)
        .send({name:"dhoni" , no:"07"})
        .end(function(err,res){
          if (err) {
                throw err;
          }
          var obj = JSON.parse(res.text);
          obj.name.should.equal('dhoni');
          obj.no.should.equal('07');
          console.log(obj)
          done();
        });
  });

   });

   describe("Testing calculator update route", function(err){
    //  it("should return a error message if id is null", function(done){
    //    url
    //        .put("/update")
    //        .send("")
    //        .expect(200)
    //        .end(function(err,res){
    //          should.not.exist(err);
    //          res.text.should.equal('enter a valid id');
    //          done();
    //        });
    // });

   it("should return a message as updated value with name", function(done){
     url
         .put("/update")
         .send([{id:"07" , name : "Dhoni"} , {id:"03" , name:"Raina"}])
         .expect(200)
         .end(function(err,res){
           should.not.exist(err);
          // let obj1 = JSON.parse(res.text);
           res.text.should.equal("03 is updated successfully in DB")
           done();
         });
  });
  });


 describe("Testing calculator DELETE route", function(err){
   it("should return a errror message if id is null", function(done){
     url
         .delete("/delete")
         .send("")
         .expect(200)
         .end(function(err,res){
           should.not.exist(err);
           res.text.should.equal('enter a valid id');
           done();
         });

  });
 it("should return  a message as deleted id", function(done){
   url
       .delete("/delete")
       .send({id:"07"})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('deleted');
         done();
       });

});
});
