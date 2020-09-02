module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define ("Carts",{
    id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

    user_id: DataTypes.INTEGER,
    
    title: DataTypes.STRING,
    
    image: DataTypes.STRING,
    
    color: DataTypes.STRING,
    
    size: DataTypes.STRING,
    
    price: DataTypes.DECIMAL(6,2),

    state: DataTypes.INTEGER,

    purchase_id: DataTypes.INTEGER,

    quantity: DataTypes.STRING,

    createdAt: DataTypes.DATE,

    updatedAt: DataTypes.DATE,

    deletedAt: DataTypes.DATE,

    
    },{tableName: "CART"});
    
    return Cart;
    }