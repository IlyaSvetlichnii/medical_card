module ApplicationHelper
  def active_class(path)
    return 'active' if current_page?(path)
  end

  def is_doctor?
    @current_user.class == Doctor
  end
end
