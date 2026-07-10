# Monkey-patch String with methods to strip/process HTML
class String
  SKILLS = 'Influence|Lore|Observation|Strength|Will'

  def remove_imgs
    # remove <img...>s
    gsub /<img[^>]+>/, ''
  end

  def remove_footnote_link
    # ...treasure.<sup id="..." ...>...</span>1<....></sup> You...
    # to
    # ...treasure. You...
    gsub /<sup.*<\/sup>/, ''
  end

  def replace_links_with_text
    # ...become <a href="/wiki/Delayed" title="Delayed">Delayed</a> to...
    # to
    # ...become Delayed to...
    gsub /<a[^>]+>(?<text>[^<]*?)<\/a>/, "\\k<text>"
  end

  def remove_repeated_whitespace
    gsub /\s+/, ' '
  end

  def replace_skill_img_with_name
    # <img alt=\"Observation\" src=...>
    # to
    # Observation
    gsub /<img\s+[^<]*alt="(?<skill>Influence|Lore|Observation|Strength|Will).*?>/, "\\k<skill>"
  end

  def replace_spans_with_text
    # <span class="mw-default-size" typeof="mw:File">
    #   <span title="Observation">
    #     Observation
    #   </span>
    # </span>
    # to
    # Observation

    # keep removing enclosing <span...>...</span>s while present
    while gsub!(/<span.[^<]+>(?<text>[^<]*?)<\/span>/, "\\k<text>") do
    end

    self
  end

  def simplify_skill_test
    # ...goods (<span ...><img alt="Observation" ...</span>-1). If...
    # to
    # ...goods; test Observation-1. If...
    sub /\s*\((?<skill>#{SKILLS})(?<modifier>.+)?\)/, "; test \\k<skill>\\k<modifier>"
  end

  def strip_html
    self
      .strip
      .replace_skill_img_with_name
      .remove_imgs
      .replace_links_with_text
      .replace_spans_with_text
      .simplify_skill_test
      .remove_footnote_link
      .remove_repeated_whitespace
  end

  def capitalize_first_letter
    sub /^./, &:upcase
  end
end
