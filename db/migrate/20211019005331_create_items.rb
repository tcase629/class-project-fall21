class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :desc
      t.boolean :bought, default: false
      t.belongs_to :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
