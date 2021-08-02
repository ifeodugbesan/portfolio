class ApplicationController < ActionController::Base
  before_action :mode
  def default_url_options
    { host: ENV["DOMAIN"] || "localhost:3000" }
  end

  def mode
    cookies[:dark_mode] == "true" ? @dark_mode = true : @dark_mode = false
  end
end
