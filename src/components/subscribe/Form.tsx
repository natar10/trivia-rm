import React, { FormEvent, useState } from "react";
import Select, { OptionsType } from "react-select";
import { FormProps } from "../../common/types";

const Subscribe: React.FC<FormProps> = ({
  data,
  handleChange,
  handleChangeSelect,
}) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input
          onChange={(e) => handleChange(e)}
          value={data.name || ""}
          type="text"
          name="name"
          placeholder="Your Rickiest Name"
          className="form-control"
          required={true}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Email: </label>
        <input
          type="email"
          onChange={(e) => handleChange(e)}
          value={data.email || ""}
          name="email"
          placeholder="Email Rick"
          className="form-control"
          required={true}
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">
          Do you also wish to subscribe to our other NewsLetters?
        </label>
        <select
          data-testid="select"
          name="more"
          className="form-control"
          value={data.more || ""}
          onChange={(e) => handleChange(e)}
          required={true}
        >
          <option data-testid="select-option" key="0" value="">
            -?-
          </option>
          <option data-testid="select-option" key="1" value="YES">
            YES
          </option>
          <option data-testid="select-option" key="2" value="NO">
            NO
          </option>
        </select>
      </div>

      {data.more === "YES" && (
        <div className="form-group">
          <label htmlFor="name">Select NewsLetters: </label>
          <Select
            required={data.more === "YES" ? true : false}
            name="newsletters"
            closeMenuOnSelect={false}
            onChange={(selectedOption, field) =>
              handleChangeSelect(selectedOption, "newsletters")
            }
            isMulti
            options={[
              { value: "Futurama", label: "Futurama" },
              { value: "Wanda Vision", label: "Wanda Vision" },
              {
                value: "Falcon and the Winter Soldier",
                label: "Falcon and the Winter Soldier",
              },
              { value: "The Simpsons", label: "The Simpsons" },
            ]}
          />
        </div>
      )}
    </>
  );
};

export default Subscribe;
