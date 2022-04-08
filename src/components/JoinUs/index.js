import React from "react";
import "./index.css";

const index = () => {
  const id = "{THE_MODEL_ID}";
  return (
    <div class="banner-2-x84v8p" data-id="2:229">
      <div class="group-120-F32aCg ignore" data-id="2:230">
        <div class="rectangle-162-MAverr ignore" data-id="2:231"></div>
        <div class="join-us-MAverr" data-id="2:232">
          Join Us
        </div>
        <div class="button-MAverr" data-id="2:233">
          <img
            class="rectangle-52-yWnarx"
            data-id="2:234"
            src="https://cdn.animaapp.com/projects/62499b675a1f4749cec521a2/releases/62499b8f87bc4dde4f5efd50/img/rectangle-52@2x.svg"
            anima-src="https://cdn.animaapp.com/projects/62499b675a1f4749cec521a2/releases/62499b8f87bc4dde4f5efd50/img/rectangle-52@2x.svg"
          />
          <div
            class="explore-more-yWnarx montserrat-bold-white-17px"
            data-id="2:235"
          >
            Explore More
          </div>
        </div>
        <img
          class="vector-10-MAverr"
          data-id="2:236"
          src="https://cdn.animaapp.com/projects/62499b675a1f4749cec521a2/releases/62499b8f87bc4dde4f5efd50/img/vector-10@2x.svg"
          anima-src="https://cdn.animaapp.com/projects/62499b675a1f4749cec521a2/releases/62499b8f87bc4dde4f5efd50/img/vector-10@2x.svg"
        />
        <div class="rectangle-88-MAverr ignore" data-id="2:237"></div>
        <div class="java-MAverr montserrat-normal-white-14px-2" data-id="2:238">
          Java
        </div>
        <div class="node-MAverr montserrat-normal-white-14px-2" data-id="2:239">
          Node
        </div>
        <div class="curl-MAverr montserrat-normal-white-14px-2" data-id="2:240">
          Curl
        </div>
        <div class="rectangle-89-MAverr" data-id="2:241"></div>
        <div class="be-a-part-of-our-happy-community-MAverr" data-id="2:242">
          BE A PART OF OUR HAPPY COMMUNITY
        </div>
        <p
          class="we-take-immense-prid-MAverr montserrat-normal-white-16px-2"
          data-id="2:243"
        >
          We take immense pride in our achievements and have a happy and
          satisfied community that trusts our work wholeheartedly. Then what are
          you waiting for ,come and be a part of the merklabs family, because we
          are here always for you.
        </p>
        <p class="response-stub-post-m-MAverr" data-id="2:244">
          <span class="span0-bDqiNA arial-regular-normal-white-12px">
            response = stub.
          </span>
          <span class="span1-bDqiNA">PostModelOutputs</span>
          <span class="span2-bDqiNA arial-regular-normal-white-12px">
            (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;service_pb2.PostModelOutputsRequest(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;model_id="{id}",
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inputs=[
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resources_pb2.Input(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data=resources_pb2.Data(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image=resources_pb2.Image(
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;url="https://samples.clarifai.com/metro-north.jpg"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;),
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;metadata=metadata
            <br />)<br />
            print("Predicted concepts:")
            <br />
          </span>
          <span class="span3-bDqiNA">
            for concept in response.outputs[0].data.concepts:
            <br />
          </span>
          <span class="span4-bDqiNA arial-regular-normal-white-12px">
            &nbsp;&nbsp;&nbsp;&nbsp;print(concept.name + " " +
            str(concept.value))
          </span>
        </p>
      </div>
    </div>
  );
};

export default index;
