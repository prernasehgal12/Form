import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";



export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [keyFields, setKeyFields] = useState([{ id: 0 }]);
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // Reset form after successful submission
  };

  const handleAddKeyField = (event) => {
    event.preventDefault();
    const newKeyFields = [...keyFields];
    if(keyFields.length<2){
    newKeyFields.push({ id: newKeyFields.length });
    //console.log(newKeyFields);
    setKeyFields(newKeyFields);
  }};

  const handleDeleteKeyField = (id) => {
    const updatedKeyFields = keyFields.filter((field) => field.id !== id);
    setKeyFields(updatedKeyFields);
  };

  return (
    <div className="bg-light">
      <div
        className="container-fluid bg-warning  mb-2"
        style={{ height: "12px" }}
      >
        <p className="text-warning">.</p>
      </div>
      <div className="d-flex flex-row justify-content-end ">
        <p className="text-right mr-2">Username</p>
        <FontAwesomeIcon
          icon={faUser}
          className=" rounded-circle border border-dark mr-2"
          style={{ width: "20px", height: "20px" }}
        />
      </div>

      <div className=" container w-50  border border-white bg-white rounded ">
        <form className="mr4 pr-4 " onSubmit={handleSubmit(onSubmit)}>
          <div className="container-fluid">
            <h4 className="text-left font-weight-bold text-dark">
              Terraform - GCE Infrastructure
            </h4>
          </div>
          {/* <form className="mr4 pr-4 " onSubmit={handleSubmit(onSubmit)}> */}
          <div className="container-fluid mr-2">
            <div className="row">
              <div className="col-sm-6">
                <div className="input-group-prepend">
                  <label htmlFor="region" className="text-secondary ">
                    Region
                  </label>
                </div>
                <select
                  id="region"
                  className={"custom-select form-control"}
                  {...register("region", {
                    required: {
                      value: true,
                      message: "Region is required",
                    },
                  })}
                >
                  <option selected></option>
                  <option value="1">India</option>
                  <option value="2">US</option>
                  <option value="3">Japan</option>
                </select>
                {errors.region && (
                  <div className="error text-danger">
                    {errors.region.message}
                  </div>
                )}
              </div>
              <div className="col-sm-6">
                <label htmlFor="projectid" className="text-secondary ">
                  Project ID
                </label>
                <input
                  type="text"
                  id="projectid"
                  className="form-control"
                  {...register("projectid", {
                    required: {
                      value: true,
                      message: "projectid is required",
                    },
                    pattern: {
                      value: /^[0-9]+$/, // Define your pattern here
                      message: "projectid must contain only numbers",
                    },
                  })}
                />
                <p className="error text-danger">{errors.projectid?.message}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="nameprefix" className="text-secondary">
                  Name Prefix
                </label>
                <input
                  type="text"
                  id="nameprefix"
                  className="form-control"
                  {...register("nameprefix", {
                    required: {
                      value: true,
                      message: "nameprefix is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/, // Define your pattern here
                      message: "nameprefix must contain only letters",
                    },
                  })}
                />
                <p className="error text-danger">
                  {errors.nameprefix?.message}
                </p>
              </div>
              <div className="col-sm-6">
                <label htmlFor="metadata" className="text-secondary">
                  Metadata
                </label>
                <input
                  type="text"
                  id="metadata"
                  className="form-control"
                  {...register("metadata", {
                    required: {
                      value: true,
                      message: "metadata is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/, // Define your pattern here
                      message: "metadata must contain only letters",
                    },
                  })}
                />
                <p className="error text-danger">{errors.metadata?.message}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div class="input-group-prepend">
                  <label for="machinetype" className="text-secondary">
                    Machine Type
                  </label>
                </div>
                <select
                  id="machinetype"
                  className={"custom-select form-control"}
                  {...register("machinetype", {
                    required: {
                      value: true,
                      message: "machinetype is required",
                    },
                  })}
                >
                  <option selected></option>
                  <option value="1">windows</option>
                  <option value="2">Linux</option>
                  <option value="3">MAC</option>
                </select>
                {errors.machinetype && (
                  <div className="error text-danger">
                    {errors.machinetype.message}
                  </div>
                )}
              </div>
              <div className="col-sm-6">
                <label htmlFor="sourceimageproject" className="text-secondary">
                  Source Image Project
                </label>
                <input
                  type="text"
                  id="sourceimageproject"
                  className="form-control"
                  {...register("sourceimageproject", {
                    required: {
                      value: true,
                      message: "sourceimageproject is required",
                    },
                    pattern: {
                      value: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: "Please enter a valid URL",
                    },
                  })}
                />
                <p className="error text-danger">
                  {errors.sourceimageproject?.message}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="sourceimage" className="text-secondary">
                  Source Image
                </label>
                <input
                  type="text"
                  id="sourceimage"
                  className="form-control"
                  {...register("sourceimage", {
                    required: {
                      value: true,
                      message: "sourceimage is required",
                    },
                    pattern: {
                      value: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: "Please enter a valid URL",
                    },
                  })}
                />
                <p className="error text-danger">
                  {errors.sourceimage?.message}
                </p>
              </div>
              <div className="col-sm-6">
                <div class="input-group-prepend">
                  <label for="disktype" className="text-secondary">
                    Disk Type
                  </label>
                </div>
                <select
                  id="disktype"
                  className={"custom-select form-control"}
                  {...register("disktype", {
                    required: {
                      value: true,
                      message: "disktype is required",
                    },
                  })}
                >
                  <option selected></option>
                  <option value="1">Disk C</option>
                  <option value="2">Disk S</option>
                  <option value="3">Disk D</option>
                </select>
                {errors.disktype && (
                  <div className="error text-danger">
                    {errors.disktype.message}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="disksize" className="text-secondary">
                  Disk Size (GB)
                </label>
                <input
                  type="text"
                  id="disksize"
                  className="form-control"
                  {...register("disksize", {
                    required: {
                      value: true,
                      message: "disksize is required",
                    },
                    pattern: {
                      value: /^\d+GB$/,
                      message:
                        "Please enter a valid disk size in GB format (e.g., 500GB)",
                    },
                  })}
                />
                <p className="error text-danger">{errors.disksize?.message}</p>
              </div>
              <div className="col-sm-6">
                <div class="input-group-prepend">
                  <label for="autodelete" className="text-secondary">
                    Auto Delete
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="autodelete"
                  className={"custom-select form-control"}
                  {...register("autodelete", {
                    required: {
                      value: true,
                      message: "autodelete is required",
                    },
                  })}
                >
                  <option selected></option>
                  <option value="1">True</option>
                  <option value="2">False</option>
                </select>
                {errors.autodelete && (
                  <div className="error text-danger">
                    {errors.autodelete.message}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="disklabels" className="text-secondary">
                  Disk Labels
                </label>
                <input
                  type="text"
                  id="disklabels"
                  className="form-control"
                  {...register("disklabels", {
                    required: {
                      value: true,
                      message: "disklabels is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "disklabels must contain only letters",
                    },
                  })}
                />
                <p className="error text-danger">
                  {errors.disklabels?.message}
                </p>
              </div>
              <div className="col-sm-6">
                <label htmlFor="mincpuplatform" className="text-secondary">
                  Min CPU Platform
                </label>
                <input
                  type="text"
                  id="mincpuplatform"
                  className="form-control"
                  {...register("mincpuplatform", {
                    required: {
                      value: true,
                      message: "mincpuplatform is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "mincpuplatform must contain only letters",
                    },
                  })}
                />
                <p className="error text-danger">
                  {errors.mincpuplatform?.message}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="resourcepolicies" className="text-secondary">
                  Resource Policies
                </label>
                <input
                  type="text"
                  id="resourcepolicies"
                  className="form-control"
                  {...register("resourcepolicies", {
                    required: {
                      value: true,
                      message: "resourcepolicies is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "resourcepolicies must contain only letters",
                    },
                  })}
                />
                <p className="error text-danger">
                  {errors.resourcepolicies?.message}
                </p>
              </div>
              <div className="col-sm-6">
                <div class="input-group-prepend">
                  <label
                    for="enablenestedvirtualization"
                    className="text-secondary"
                  >
                    Enable Nested Virtualization
                  </label>
                </div>
                <select
                  id="enablenestedvirtualization"
                  className={"custom-select form-control"}
                  {...register("enablenestedvirtualization", {
                    required: {
                      value: true,
                      message: "enablenestedvirtualization is required",
                    },
                  })}
                >
                  <option selected value=""></option>
                  <option value="1">True</option>
                  <option value="2">False</option>
                </select>
                {errors.enablenestedvirtualization && (
                  <div className="error text-danger">
                    {errors.enablenestedvirtualization.message}
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="stacktype" className="text-secondary">
                  Stack Type
                </label>
                <input
                  type="text"
                  id="stacktype"
                  className="form-control"
                  {...register("stacktype", {
                    required: {
                      value: true,
                      message: "stacktype is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "stacktypemust contain only letters",
                    },
                  })}
                />
                <p className="error text-danger">
                  {errors.stacktype?.message}
                </p>
              </div>

              <div className="col-sm-6">
                <label htmlFor="threadspercore" className="text-secondary ">
                  Threads per Core
                </label>
                <input
                  type="text"
                  id="threadspercore"
                  className="form-control"
                  {...register("threadspercore", {
                    required: {
                      value: true,
                      message: "threadspercore is required",
                    },
                    pattern: {
                      value: /^[0-9]+$/, // Define your pattern here
                      message: "threadspercore must contain only numbers",
                    },
                  })}
                />
                <p className="error text-danger">
                  {errors.threadspercore?.message}
                </p>
              </div>
            </div>

            <div className="container-fluid">
              <div className="d-flex flex-row mb-2">
                <div className="">
                  <p className="font-weight-bold text-dark">Tags</p>
                </div>
                <div className="  rounded  ml-2 ">
                  <button
                    className="btn-warning rounded "
                    style={{ width: "30px", height: "35px" }}
                    onClick={handleAddKeyField}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>

              {keyFields.slice(0, 2).map((field) => (
                <div className="row mb-2" key={field.id}>
                  <div className="col-sm-5">
                    <select
                      className="custom-select"
                      // id="key"
                      name={`key-${field.id}`} // Use a unique identifier in the name attribute
                      {...register(
                        `key-${field.id}`
                        //   { // Update here as well
                        //     required: {
                        //         value: true,
                        //         message: "key is required",
                        //     },
                        // }
                      )}
                    >
                      <option selected>Choose Key</option>
                      <option value="1">key1</option>
                      <option value="2">key2</option>
                      {/* <option value="custom">Custom Key</option> */}
                    </select>
                    {/* {errors[`key-${field.id}`] && (
                         <div className="error text-danger">{errors[`key-${field.id}`].message}</div>
                    )} */}
                  </div>
                  {/* {watch(`key-${field.id}`) === "custom" && (
      <div className="col-sm-7">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Custom Key"
          {...register(`custom-key-${field.id}`)}
        />
      </div>
    )} */}

                  <div className="col-sm-5">
                    <input
                      type="text"
                      className="form-control"
                      name={`keyvalue-${field.id}`}
                      {...register(
                        `keyvalue-${field.id}`
                        //   {
                        //   required: {
                        //     value: true,
                        //     message: "keyvalue is required",
                        //   },
                        //   pattern: {
                        //     value: /^[a-zA-Z]+$/,
                        //     message: "keyvalue must contain only letters",
                        //   },
                        // }
                      )}
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-danger rounded  "
                      style={{ width: "35px", height: "42px" }}
                      onClick={() => handleDeleteKeyField(field.id)}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </div>
              ))}

              <div className="d-flex flex-row mb-4">
                <div className="mr-3">
                  <button
                    type="button"
                    class="btn btn-outline-dark "
                    style={{ width: "90px", height: "35px" }}
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn btn-outline-warning "
                    style={{ width: "90px", height: "35px" }}
                    // onClick={handleSaveClick}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
