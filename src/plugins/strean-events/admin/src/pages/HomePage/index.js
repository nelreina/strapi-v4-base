/*
 *
 * HomePage
 *
 */

import {
  Layout,
  BaseHeaderLayout,
  ContentLayout,
} from "@strapi/design-system/Layout";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { Button } from "@strapi/design-system/Button";
import React, { useState } from "react";

import Modal from "../../components/EventStream/Modal";
import { addMapping } from "../../api";

const HomePage = () => {
  const [mappings, setMappings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <BaseHeaderLayout
        title="Stream Events Plugin"
        subtitle="Map Redis streams with Strapi services and methods"
        as="h2"
      />

      <ContentLayout>
        {mappings.length === 0 ? (
          <EmptyStateLayout
            content="No mapping avaialable"
            action={
              <Button onClick={() => setShowModal(true)}>Add Mapping</Button>
            }
          />
        ) : (
          <p>Not empty state</p>
        )}
      </ContentLayout>
      {showModal && (
        <Modal setShowModal={setShowModal} addMapping={addMapping} />
      )}
    </Layout>
  );
};

export default HomePage;
