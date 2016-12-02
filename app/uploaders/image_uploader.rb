# frozen_string_literal: true
class ImageUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave

  process :tags => ['post_picture']

  version :standard do
    process :resize_to_fill => [400, 400, :north]
  end

  version :thumbnail do
    resize_to_fit(200, 200)
  end
end
