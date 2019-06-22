FROM ruby:2.5.3-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk add \
  bash \
  alpine-sdk \
  postgresql-dev \
  imagemagick \
  nodejs \
  yarn \
  libxml2-dev \
  libxslt-dev \
  tzdata

ADD Gemfile Gemfile.lock ./
ADD . ./

RUN bundle install --jobs 5 --retry 5 --without development test

ENV RAILS_ENV production
ENV RACK_ENV production

RUN bundle exec rake assets:precompile

VOLUME /app/public

CMD bundle exec rake db:migrate; bundle exec puma -C config/puma.rb
