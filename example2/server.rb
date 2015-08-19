require 'sinatra'
require 'dotenv'
Dotenv.load

get '/' do
  ENV["lemurs"]
end

# require 'sinatra'

# get '/' do
#   ENV['anna']
# end