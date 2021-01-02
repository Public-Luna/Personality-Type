module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/form',function(req,res){
        res.render('formpage.html');
    });
}