class Features {
    constructor(query , queryStr){
        this.query= query;
        this.queryStr=queryStr;
    }
    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex:this.queryStr.keyword, //regular expression
                $options: "i" , //case insensitive
            },
        }:{};

        console.log(keyword);
        this.query=  this.query.find({...keyword})
        return this;
    }
    filter(){
        const queryCp = {...this.queryStr}
        //filter for category
        console.log(queryCp);
        const remove =['keyword','page','limit']
        remove.forEach(key => delete queryCp[key]);
        //price
        let queryStr = JSON.stringify(queryCp);
       queryStr= queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key)=>`$${key}`)
        this.query = this.query.find(JSON.parse(queryStr));
        return this;

    }
    page(resPerPage){
        const currentPage = Number(this.queryStr.page) ||1 ;
        const skip = resPerPage * (currentPage-1);

        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }
}

module.exports = Features;