/**
 * PizzaIngredientsController
 *
 * @description :: Server-side logic for managing pizzaingredients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
/**
   * `PizzaIngredientsController.index()`
   */
  index: function(req, res)
  {
    PizzaIngredients.find(function(err, PizzaIngredients)
   {
   res.view()
   })
  },

  create: function (req, res) {
    PizzaIngredients.create({
      name: req.name,
      price: req.price
    })
    .exec(cb);
    return res.json({
      notice: 'Ingrediente creado con el nombre: ' + created.name
    });
  },


  /**
   * `PizzaIngredientsController.show()`
   */
  show: function (req, res) {
    return res.json({
      todo: 'show() is not implemented yet!'
    });
  },


  /**
   * `PizzaIngredientsController.edit()`
   */
  edit: function (req, res) {
    return res.json({
      todo: 'edit() is not implemented yet!'
    });
  },


  /**
   * `PizzaIngredientsController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

