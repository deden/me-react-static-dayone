/* eslint-disable */
import expect from 'expect'
import formattedEntry from '../../src/utils/formattedEntry'

describe('formattedEntry', () => {
  it('should convert an entry into a new one with title, body and url attributes', () => {
    const entry = {
      "starred" : false,
      "location" : {
        "region" : {
          "center" : {
            "longitude" : 112.94809827777641,
            "latitude" : -2.5524619279002185
          },
          "identifier" : "<-2.55246193,+112.94809828> radius 141.90",
          "radius" : 141.89955044579349
        },
        "country" : "Indonesia",
        "timeZoneName" : "Asia\/Pontianak",
        "administrativeArea" : "South Borneo",
        "longitude" : 112.94809722900391,
        "placeName" : "Jalan Manggis 2",
        "latitude" : -2.5524618625640869
      },
      "creationDate" : "2017-11-15T22:43:03Z",
      "text" : "Day One\nYeah, this is my day one on Day One app.\nThis app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "weather" : {
        "sunsetDate" : "2017-11-16T10:14:02Z",
        "temperatureCelsius" : 24,
        "weatherServiceName" : "HAMweather",
        "windBearing" : 40,
        "sunriseDate" : "2017-11-15T21:57:23Z",
        "conditionsDescription" : "Mostly Sunny",
        "pressureMB" : 1009,
        "visibilityKM" : 7,
        "relativeHumidity" : 100,
        "windSpeedKPH" : 7,
        "weatherCode" : "fair",
        "windChillCelsius" : 24
      },
      "timeZone" : "Asia\/Pontianak",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
      "tags" : [
        "Day One"
      ],
      "duration" : 0
    }

    const expected = {
      "starred" : false,
      "location" : {
        "region" : {
          "center" : {
            "longitude" : 112.94809827777641,
            "latitude" : -2.5524619279002185
          },
          "identifier" : "<-2.55246193,+112.94809828> radius 141.90",
          "radius" : 141.89955044579349
        },
        "country" : "Indonesia",
        "timeZoneName" : "Asia\/Pontianak",
        "administrativeArea" : "South Borneo",
        "longitude" : 112.94809722900391,
        "placeName" : "Jalan Manggis 2",
        "latitude" : -2.5524618625640869
      },
      "creationDate" : "2017-11-15T22:43:03Z",
      "text" : "Day One\nYeah, this is my day one on Day One app.\nThis app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "weather" : {
        "sunsetDate" : "2017-11-16T10:14:02Z",
        "temperatureCelsius" : 24,
        "weatherServiceName" : "HAMweather",
        "windBearing" : 40,
        "sunriseDate" : "2017-11-15T21:57:23Z",
        "conditionsDescription" : "Mostly Sunny",
        "pressureMB" : 1009,
        "visibilityKM" : 7,
        "relativeHumidity" : 100,
        "windSpeedKPH" : 7,
        "weatherCode" : "fair",
        "windChillCelsius" : 24
      },
      "timeZone" : "Asia\/Pontianak",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
      "tags" : [
        "Day One"
      ],
      "duration" : 0,
      "title" : "Day One",
      "body"  : "Yeah, this is my day one on Day One app.\nThis app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "url" : "day_one"
    }
    
    const actual = formattedEntry(entry)
    expect(actual).toEqual(expected)
  })

  it('should accept any first line of entry as title', () => {
    const entry = {
      "text" : "This app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
    }

    const expected = {
      "text" : "This app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
      "title" : "This app really slick, superb design style and very  well ‘handcrafted’ in every pixel.",
      "body" : "I wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "url" : "this_app_really_slick__superb_design_style_and_very__well__handcrafted__in_every_pixel_"
    }

    const actual = formattedEntry(entry)
    expect(actual).toEqual(expected)
  })

  it('should accept an entry with empty fist new line as empty title, with url copied from uuid instead', () => {
    const entry = {
      "text" : "\nThis app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
    }

    const expected = {
      "text" : "\nThis app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "uuid" : "6D558974A12B40D98552EF31BB00C166",
      "title" : "",
      "body" : "This app really slick, superb design style and very  well ‘handcrafted’ in every pixel.\n\nI wonder if I can import my Calendar entries into this app.\nIn meanwhile I will find out, just a sec.",
      "url" : "6D558974A12B40D98552EF31BB00C166"
    }

    const actual = formattedEntry(entry)
    expect(actual).toEqual(expected)
  })
})
