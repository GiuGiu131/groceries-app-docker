-- Make sure we're using the right database
CREATE DATABASE IF NOT EXISTS shopping_list;
USE shopping_list;

-- Drop tables if exists and recreate (for clean setup)
DROP TABLE IF EXISTS shopping_items;
DROP TABLE IF EXISTS inventory_items;

-- Create inventory table (items available to add)
CREATE TABLE inventory_items (
                                 id INT AUTO_INCREMENT PRIMARY KEY,
                                 name VARCHAR(255) NOT NULL UNIQUE,
                                 category VARCHAR(100),
                                 price DECIMAL(10, 2) DEFAULT 0.00,
                                 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create shopping list table with foreign key reference
CREATE TABLE shopping_items (
                                shopping_item_id INT AUTO_INCREMENT PRIMARY KEY,
                                inventory_item_id INT NOT NULL,
                                quantity INT DEFAULT 1,
                                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                FOREIGN KEY (inventory_item_id) REFERENCES inventory_items(id) ON DELETE CASCADE
);

-- Insert inventory items with remaining quantities and prices
INSERT INTO inventory_items (name, category, price) VALUES
-- Dairy & Eggs
('Milk', 'Dairy', 3.99),
('Eggs', 'Dairy', 4.50),
('Cheese', 'Dairy', 6.99),
('Butter', 'Dairy', 5.49),
('Yogurt', 'Dairy', 1.99),

-- Fruits
('Bananas', 'Fruits', 2.49),
('Apples', 'Fruits', 4.99),
('Oranges', 'Fruits', 3.99),
('Lemons', 'Fruits', 0.89),  -- Out of stock
('Strawberries', 'Fruits', 5.99),

-- Vegetables
('Tomatoes', 'Vegetables', 3.49),
('Onions', 'Vegetables', 2.99),
('Carrots', 'Vegetables', 1.99),
('Lettuce', 'Vegetables', 2.49),  -- Out of stock
('Potatoes', 'Vegetables', 4.99),

-- Meat & Fish
('Chicken Breast', 'Meat', 12.99),
('Ground Beef', 'Meat', 8.99),
('Salmon', 'Fish', 15.99),
('Bacon', 'Meat', 7.99),  -- Out of stock

-- Pantry & Staples
('Bread', 'Bakery', 2.99),
('Rice', 'Pantry', 3.49),
('Pasta', 'Pantry', 1.99),
('Olive Oil', 'Pantry', 8.99),
('Salt', 'Pantry', 1.49),

-- Beverages
('Coffee', 'Beverages', 12.99),
('Tea', 'Beverages', 4.99),
('Orange Juice', 'Beverages', 4.49),
('Water', 'Beverages', 5.99);

-- Insert some sample shopping list items using inventory_item_id
INSERT INTO shopping_items (inventory_item_id, quantity) VALUES
    (1, 1),  -- Milk
    (20, 2), -- Bread
    (2, 12),  -- Eggs
    (7, 6);  -- Apples