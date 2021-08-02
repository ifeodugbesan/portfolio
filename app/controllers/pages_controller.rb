class PagesController < ApplicationController
  def home
  end

  def switch_mode
    @dark_mode == true ? cookies.permanent[:dark_mode] = false : cookies.permanent[:dark_mode] = true
    redirect_to request.referrer
  end
end
