class User < ApplicationRecord
    has_many :user_communities
    has_many :posts
    has_many :communities, through: :user_communities
    validates :username, presence: :true, uniqueness: true

    has_secure_password

    PASSWORD_FORMAT = /\A
  (?=.{8,})          # Must contain 8 or more characters
  (?=.*\d)           # Must contain a digit
  (?=.*[a-z])        # Must contain a lower case character
  (?=.*[A-Z])        # Must contain an upper case character
  (?=.*[[:^alnum:]]) # Must contain a symbol
/x

  validates :password, :confirmation => true,
                       :length => { :within => 6..40 },
                       format: { with: PASSWORD_FORMAT },
                       :on => :create

  validates :password, :confirmation => true,
                       :length => { :within => 6..40 },
                       format: { with: PASSWORD_FORMAT },
                       :allow_blank => false,
                       :on => :update

  validates :email, uniqueness: true,
                    format: { with: URI::MailTo::EMAIL_REGEXP }
end

