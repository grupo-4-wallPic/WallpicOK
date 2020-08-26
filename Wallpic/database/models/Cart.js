module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define ("Cart",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
    
    category: DataTypes.STRING,
    
    title: DataTypes.STRING,
    
    image: DataTypes.STRING,
    
    color: DataTypes.STRING,
    
    size: DataTypes.STRING,
    
    price: DataTypes.INTEGER,

    state: DataTypes.INTEGER,

    purchase_id: DataTypes.INTEGER

    
    },{tableName: "CART"});
    
    return Cart;
    }