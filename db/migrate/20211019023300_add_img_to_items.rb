class AddImgToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :img, :string
  end
end
